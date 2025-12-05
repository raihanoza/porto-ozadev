// scripts/optimize-images.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Konfigurasi
const CONFIG = {
  inputDir: "./public/image",
  outputDir: "./public/image/optimized",

  // Profil optimisasi untuk berbagai jenis gambar
  profiles: {
    background: {
      width: 1920,
      height: 1080,
      quality: 100,
      formats: ["webp", "jpg"],
    },
    hero: {
      width: 800,
      height: 800,
      quality: 85,
      formats: ["webp", "png"],
    },
    icon: {
      width: 80,
      height: 80,
      quality: 90,
      formats: ["webp", "png"],
    },
  },
};

// Fungsi untuk generate blur placeholder
async function generateBlurPlaceholder(inputPath) {
  try {
    const buffer = await sharp(inputPath)
      .resize(10, 10, { fit: "inside" })
      .blur(1)
      .toBuffer();

    const base64 = buffer.toString("base64");
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error(`Error generating blur for ${inputPath}:`, error.message);
    return null;
  }
}

// Fungsi untuk optimisasi gambar berdasarkan profil
async function optimizeImage(inputPath, profile, outputName) {
  const { width, height, quality, formats } = profile;
  const results = [];

  try {
    console.log(`\n📸 Processing: ${inputPath}`);

    // Dapatkan metadata gambar original
    const metadata = await sharp(inputPath).metadata();
    console.log(
      `   Original: ${metadata.width}x${metadata.height}, ${(
        metadata.size / 1024
      ).toFixed(2)}KB`
    );

    // Proses untuk setiap format
    for (const format of formats) {
      const outputPath = path.join(CONFIG.outputDir, `${outputName}.${format}`);

      let sharpInstance = sharp(inputPath).resize(width, height, {
        fit: "cover",
        position: "center",
        withoutEnlargement: true,
      });

      // Konfigurasi berdasarkan format
      if (format === "webp") {
        sharpInstance = sharpInstance.webp({
          quality,
          effort: 6, // 0-6, higher = better compression tapi lebih lama
        });
      } else if (format === "jpg" || format === "jpeg") {
        sharpInstance = sharpInstance.jpeg({
          quality,
          progressive: true,
          mozjpeg: true,
        });
      } else if (format === "png") {
        sharpInstance = sharpInstance.png({
          quality,
          compressionLevel: 9,
          progressive: true,
        });
      } else if (format === "avif") {
        sharpInstance = sharpInstance.avif({
          quality,
          effort: 6,
        });
      }

      await sharpInstance.toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const savedSize = (stats.size / 1024).toFixed(2);
      const reduction = (
        ((metadata.size - stats.size) / metadata.size) *
        100
      ).toFixed(1);

      console.log(
        `   ✅ ${format.toUpperCase()}: ${savedSize}KB (${reduction}% reduction)`
      );
      results.push({ format, path: outputPath, size: savedSize });
    }

    // Generate blur placeholder
    const blurDataURL = await generateBlurPlaceholder(inputPath);
    if (blurDataURL) {
      const blurPath = path.join(CONFIG.outputDir, `${outputName}.blur.txt`);
      fs.writeFileSync(blurPath, blurDataURL);
      console.log(`   🔲 Blur placeholder saved`);
    }

    return results;
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return [];
  }
}

// Fungsi untuk generate responsive images (multiple sizes)
async function generateResponsiveSizes(
  inputPath,
  outputBaseName,
  sizes = [640, 768, 1024, 1280, 1920]
) {
  console.log(`\n📱 Generating responsive sizes for: ${inputPath}`);

  try {
    for (const width of sizes) {
      const outputPath = path.join(
        CONFIG.outputDir,
        "responsive",
        `${outputBaseName}-${width}w.webp`
      );

      // Pastikan folder responsive ada
      const responsiveDir = path.join(CONFIG.outputDir, "responsive");
      if (!fs.existsSync(responsiveDir)) {
        fs.mkdirSync(responsiveDir, { recursive: true });
      }

      await sharp(inputPath)
        .resize(width, null, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`   ✅ ${width}w: ${(stats.size / 1024).toFixed(2)}KB`);
    }
  } catch (error) {
    console.error(`❌ Error generating responsive sizes:`, error.message);
  }
}

// Fungsi utama
async function main() {
  console.log("🚀 Starting image optimization...\n");

  // Buat output directory jika belum ada
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // List of images to optimize
  const images = [
    // Background images
    {
      input: "HeroBg.png",
      profile: "background",
      output: "hero-bg-dark",
      responsive: true,
    },
    {
      input: "HeroBgLight.png",
      profile: "background",
      output: "hero-bg-light",
      responsive: true,
    },

    // Hero icon
    {
      input: "ic-hero.png",
      profile: "hero",
      output: "hero-icon",
      responsive: false,
    },

    // Small icons
    {
      input: "coffee.png",
      profile: "icon",
      output: "coffee-icon",
      responsive: false,
    },
  ];

  // Process each image
  const allResults = {};

  for (const img of images) {
    const inputPath = path.join(CONFIG.inputDir, img.input);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  File not found: ${inputPath}`);
      continue;
    }

    const results = await optimizeImage(
      inputPath,
      CONFIG.profiles[img.profile],
      img.output
    );

    allResults[img.output] = results;

    // Generate responsive sizes jika diperlukan
    if (img.responsive) {
      await generateResponsiveSizes(inputPath, img.output);
    }
  }

  // Generate summary report
  console.log("\n" + "=".repeat(60));
  console.log("📊 OPTIMIZATION SUMMARY");
  console.log("=".repeat(60));

  Object.entries(allResults).forEach(([name, results]) => {
    console.log(`\n${name}:`);
    results.forEach((r) => {
      console.log(`  - ${r.format}: ${r.size}KB`);
    });
  });

  // Generate import helper file
  generateImportHelper(allResults);

  console.log("\n✨ Optimization complete!");
  console.log(`📁 Optimized images saved to: ${CONFIG.outputDir}`);
}

// Generate helper file untuk import
function generateImportHelper(results) {
  const helperPath = path.join(CONFIG.outputDir, "image-imports.ts");

  let content = "// Auto-generated image imports\n";
  content += "// Generated at: " + new Date().toISOString() + "\n\n";

  Object.keys(results).forEach((name) => {
    const camelCase = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    // Fix: Path relatif dari file image-imports.ts ke gambar
    content += `export { default as ${camelCase} } from './${name}.webp';\n`;
  });

  content += "\n// Blur placeholders\n";
  Object.keys(results).forEach((name) => {
    const camelCase = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const blurFile = path.join(CONFIG.outputDir, `${name}.blur.txt`);
    if (fs.existsSync(blurFile)) {
      const blurData = fs.readFileSync(blurFile, "utf-8");
      content += `export const ${camelCase}Blur = '${blurData}';\n`;
    }
  });

  fs.writeFileSync(helperPath, content);
  console.log(`\n📝 Import helper generated: ${helperPath}`);
}

// Handle errors
process.on("unhandledRejection", (error) => {
  console.error("❌ Unhandled error:", error);
  process.exit(1);
});

// Run
main().catch(console.error);
