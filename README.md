loopback-component-cloudinary
==============================

Connect Loopback with Cloudinary.

1. Install component

    npm install loopback-component-cloudinary --save

2. Configure datasource

    "cloudinary": {
        "name": "cloudinary",
        "connector": "loopback-component-cloudinary",
        "url": "[API-URL]"
      },

3. Define model, common/models/cloudinary-image.json:

    {
        "name": "CloudinaryImage",
        "base": "Model"
    }

4. Add entry to server/model-config.json

    "CloudinaryImage": {
        "dataSource": "cloudinary",
        "public": true
    }

5. Use

