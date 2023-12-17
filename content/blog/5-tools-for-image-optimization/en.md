---
title: 5 Tools for Image Optimization
description: Read how we optimize images to make your websites blazingly fast.
head.title: 5 Tools for Image Optimization
head.description: Read how we optimize images to make your websites blazingly fast.
head.image: /image/blog/5-tools-for-image-optimization.png
imageUrl: /image/blog/5-tools-for-image-optimization.png
tags: ['Performance', 'Cloudinary', 'WebP']
created: '2022-07-17T12:34:44'
authorName: 'Simon Macek'
time: ''
locale: 'en'
---

# 5 Tools for Image Optimization

Image optimization can be the thing that makes or breaks your performance scores. Here are some of the popular tools that help you to deal with large images.

## Key concepts of image optimization

Images such as a photographies, info-graphics, or illustrations are made of pixels. The more pixels you have, the more detailed and larger the image is. Modern DSLR cameras can easily spit out images with width and height over 3000px. This can mean 4-5Mb of data which is far to much for images to load smoothly.

The problem gets worse when you switch to **mobile devices**. Many internet users have a limited data plan, and downloading a bunch of large images can drain it in no time.

Moreover, loading images usually makes up for a large part of the website's performance issues. Since the performance recently became a [factor in SEO ranking](https://developers.google.com/search/blog/2010/04/using-site-speed-in-web-search-ranking). Large images may **hurt your position on Google results page**!

### Image Resolution

You should **scale down** your images from its source resolution. What resolution do you need?

Imagine a large computer screen. Those typically have Full HD resolution: 1920x1080 pixels. Image with higher resolution will only get scaled down to fit your display and the extra data will get lost.

If your image does not take the full width of the screen, you need even less pixels. Most of the images used on websites are relatively small. For a blog post, I typically use about **600-800px** wide images, and they look great.

### Image Compression

Another important step aside from resizing is the image compression. Compressing the image results in lower quality, but it can make the file size much smaller. Content creators are often afraid of compression and claim that their images do not look as good compressed. But with the right tools, you can achieve **compression that is virtually indistinguishable** from the original.

### Image Format

Sometimes the image format can also play a role. Importantly, the recently introduced .webp format created by Google is extremely efficient in producing high-quality images with a small file size. The catch is that not all browsers support this format. I will get to how to solve this issue later.

## Optimization tools

Here are some great tools which I use regularly to optimize my images.

- [BulkResizePhotos.com](https://bulkresizephotos.com/) is a flexible tool that allows you to scale large batches of images to a desired width or height. It outputs .jpg, .png or .webp files.
- [TinyPNG.com](https://tinypng.com/) is an amazing compression tool, which can compress images by a considerable amount while keeping their resolution.
- [Cloudinary](https://cloudinary.com/) a full-featured service for hosting, optimizing and serving images which can be integrated to any website and can save a lot of manual work.
- [ImageOptim](https://imageoptim.com/mac) is tool for iOS which allows to compress images right inside your computer. Just right click and select 'ImageOptimize', and watch the app save you space.
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - this one optimizes SVG graphics. SVGs are a topic on its own, so I will probably write about them soon.

## Using the tools

As you can see, there are multiple tools that help with image optimization. But how to use them? One option is to use BulkResizePhotos and TinyPNG to optimize your images before the upload. This is an ideal solution for saving space on your hosting platform. It does, however, introduce those few extra steps into the content editing.

Instead, we could use something like Cloudinary, to make this process automatic. [Cloudinary's WordPress plugin](https://cloudinary.com/documentation/wordpress_integration) does just that. It loads images from your media library and serves them to your website from its own CDN. This ensures that you load an optimized version of the file every time, and it even **fetches the correct format** for you!

Each content management system has developed at least some way of controlling the image sizes. Custom implementations can be made (on my WordPress sites, I tend to use a custom automated solution designed by one of my colleagues - with their consent). But the key takeaway is that **image size matters**.

### Images in code

For a little preview of what goes into image optimization, here are some code snippets.

This is a basic image tag that displays an image in a HTML page.

```html
<img
  src="https://res.cloudinary.com/pavilionpreview/image/upload/v1654713084/sample.jpg"
  alt="Bee on a flower"
/>
```

![Example image](https://res.cloudinary.com/pavilionpreview/image/upload/v1654713084/sample.jpg)

The simplest thing that can be done to improve loading your page is adding the **lazy loading attribute**. This means that the image will not load until the user scrolls down to it.

```html
<img
  src="https://res.cloudinary.com/pavilionpreview/image/upload/v1654713084/sample.jpg"
  alt="Bee on a flower"
  loading="lazy"
/>
```

Additionally, we can add images in different formats using the `<picture>` and `<source>` tags in combination with the original `<img>` tag.

```html
<picture>
  <!-- webp format -->
  <source
    srcset="
      https://res.cloudinary.com/pavilionpreview/image/upload/v1660040516/sample-webp_mtgf59.webp
    "
    type="image/webp"
  />
  <!-- default jpeg format -->
  <img
    src="https://res.cloudinary.com/pavilionpreview/image/upload/v1654713084/sample.jpg"
    alt="Bee on a flower"
    type="image/jpeg"
    loading="lazy"
  />
</picture>
```

Here the browsers which support .webp format will load it to save bandwidth, and browsers which do not support next generation formats will load the .jpeg image as a fallback.

## Final thougths

There is still much more to be said about this topic, but I will stop here. I might write a second part to this article later.

The key thing to take home is that a good solution for image optimization is a necessary part of any well-made website.
