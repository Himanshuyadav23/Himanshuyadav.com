const fs = require('fs');
const path = require('path');

// Files to update
const filesToUpdate = [
  'src/components/about.tsx',
  'src/components/speaking.tsx',
  'src/components/hero.tsx',
  'src/components/ventures.tsx'
];

// Image path mappings
const imageMappings = {
  // Awards images
  '/images/awards/IMG_20240324_205403505_HDR.jpg': '/images/awards/IMG_20240324_205403505_HDR.webp',
  '/images/awards/DSP_7000.JPG': '/images/awards/DSP_7000.webp',
  '/images/awards/IMG-20240316-WA0006.jpg': '/images/awards/IMG-20240316-WA0006.webp',
  '/images/awards/IMG_20230828_103457.jpg': '/images/awards/IMG_20230828_103457.webp',
  '/images/awards/IMG_5101.JPG': '/images/awards/IMG_5101.webp',
  '/images/awards/RSP_0145.jpg': '/images/awards/RSP_0145.webp',
  '/images/awards/RSP_0196.jpg': '/images/awards/RSP_0196.webp',
  '/images/awards/DSP_7073.JPG': '/images/awards/DSP_7073.webp',
  '/images/awards/6O0A4097.JPG': '/images/awards/6O0A4097.webp',
  '/images/awards/6O0A4648.JPG': '/images/awards/6O0A4648.webp',
  '/images/awards/DSP_7311 (1).JPG': '/images/awards/DSP_7311 (1).webp',
  '/images/awards/IMG_5080.JPG': '/images/awards/IMG_5080.webp',
  
  // Speaking images
  '/images/speaking/DSP_6742.JPG': '/images/speaking/DSP_6742.webp',
  '/images/speaking/IMG_6920.jpg': '/images/speaking/IMG_6920.webp',
  '/images/speaking/IMG_6921.jpg': '/images/speaking/IMG_6921.webp',
  '/images/speaking/IMG_6922.jpg': '/images/speaking/IMG_6922.webp',
  '/images/speaking/IMG_8721.jpg': '/images/speaking/IMG_8721.webp',
  '/images/speaking/IMG_8757.jpg': '/images/speaking/IMG_8757.webp',
  '/images/speaking/IMG_8800.jpg': '/images/speaking/IMG_8800.webp',
  '/images/speaking/IMG20220930140116.jpg': '/images/speaking/IMG20220930140116.webp',
  '/images/speaking/RSP_0291.jpg': '/images/speaking/RSP_0291.webp',
  '/images/speaking/RSP_8742.jpg': '/images/speaking/RSP_8742.webp',
  
  // Profile images
  '/images/about/WhatsApp Image 2025-04-27 at 5.35.59 PM.jpeg': '/images/about/WhatsApp Image 2025-04-27 at 5.35.59 PM.webp',
  
  // Venture logos
  '/images/ventures/logo Dcomm Agency.png': '/images/ventures/logo Dcomm Agency.webp',
  '/images/ventures/SOCIAL TACT LOGO.png': '/images/ventures/SOCIAL TACT LOGO.webp',
  '/images/ventures/BrandPulse Logo - Fresh Tech Feel.png': '/images/ventures/BrandPulse Logo - Fresh Tech Feel.webp'
};

function updateImageSources() {
  console.log('🔄 Updating image sources to WebP...\n');

  for (const filePath of filesToUpdate) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File ${filePath} not found, skipping...`);
      continue;
    }

    console.log(`📝 Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Replace all image paths
    for (const [oldPath, newPath] of Object.entries(imageMappings)) {
      if (content.includes(oldPath)) {
        content = content.replace(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
        updated = true;
        console.log(`  ✅ ${oldPath} → ${newPath}`);
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${filePath}\n`);
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}\n`);
    }
  }

  console.log('🎉 Image source updates complete!');
}

updateImageSources();
