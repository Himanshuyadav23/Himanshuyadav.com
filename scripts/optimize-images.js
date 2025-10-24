const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories to optimize
const directories = [
  'public/images/awards',
  'public/images/speaking',
  'public/images/about',
  'public/images/ventures'
];

// Image optimization settings
const settings = {
  // For awards gallery (thumbnails)
  awards: {
    width: 400,
    height: 400,
    quality: 80,
    format: 'webp'
  },
  // For speaking gallery
  speaking: {
    width: 500,
    height: 500,
    quality: 85,
    format: 'webp'
  },
  // For profile images
  profile: {
    width: 300,
    height: 375,
    quality: 90,
    format: 'webp'
  },
  // For venture logos
  logos: {
    width: 200,
    height: 200,
    quality: 90,
    format: 'webp'
  }
};

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`⚠️  Directory ${dir} not found, skipping...`);
      continue;
    }

    console.log(`📁 Processing ${dir}...`);
    const files = fs.readdirSync(dir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/.test(file)
    );

    for (const file of imageFiles) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, '.webp'));
      
      try {
        // Determine optimization settings based on directory
        let config;
        if (dir.includes('awards')) config = settings.awards;
        else if (dir.includes('speaking')) config = settings.speaking;
        else if (dir.includes('about')) config = settings.profile;
        else if (dir.includes('ventures')) config = settings.logos;
        else config = settings.awards; // default

        await sharp(inputPath)
          .resize(config.width, config.height, { 
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: config.quality })
          .toFile(outputPath);

        console.log(`✅ ${file} → ${path.basename(outputPath)}`);
      } catch (error) {
        console.log(`❌ Failed to optimize ${file}: ${error.message}`);
      }
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update your components to use .webp images');
  console.log('2. Add fallback .jpg images for older browsers');
  console.log('3. Test the optimized images');
}

optimizeImages().catch(console.error);
