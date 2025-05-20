# Memorial Website for James Aubrey Hing

This is a modern, minimalist memorial website created to honor the memory of James Aubrey Hing. The site includes sections for biography, timeline, photos, audio memories, video tributes, and written tributes from family and friends.

## How to Add Content

### Biography Section
1. Open the `index.html` file
2. Locate the "About James" section (around line 230)
3. Replace the placeholder text with actual biographical information

### Timeline Section
1. Open the `index.html` file
2. Locate the "Life Timeline" section (around line 235)
3. For each timeline item, replace the placeholder text with actual dates and information about significant events in James's life

### Photo Gallery
1. Add actual photos to the `/images` directory
2. Open the `index.html` file
3. Locate the "Photo Memories" section (around line 285)
4. For each photo placeholder, update the `data-img` attribute to point to the actual image file (e.g., `data-img="images/early-years.jpg"`)
5. Update the text inside each placeholder to describe the photo

### Audio Memories
1. Add audio files to the `/audio` directory (MP3 format recommended)
2. Open the `index.html` file
3. Locate the "Audio Memories" section (around line 297)
4. For each audio placeholder, you'll need to replace it with an actual HTML5 audio player:
   ```html
   <audio controls>
     <source src="audio/filename.mp3" type="audio/mpeg">
     Your browser does not support the audio element.
   </audio>
   ```

### Video Tributes
1. Add video files to the `/videos` directory (MP4 format recommended)
2. Open the `index.html` file
3. Locate the "Video Tributes" section (around line 315)
4. For each video placeholder, you'll need to replace it with an actual HTML5 video player:
   ```html
   <video controls width="100%">
     <source src="videos/filename.mp4" type="video/mp4">
     Your browser does not support the video element.
   </video>
   ```
   
### Tributes & Memories
1. Open the `index.html` file
2. Locate the "Tributes & Memories" section (around line 333)
3. Replace the placeholder tributes with actual tributes from family and friends
4. Update the author names accordingly

## Technical Information

This is a static HTML website that uses:
- HTML5 for structure
- CSS3 for styling
- JavaScript for interactive elements
- Responsive design that works on mobile, tablet, and desktop devices

The site is organized into the following directories:
- `/` - Main HTML file
- `/css` - Stylesheet files
- `/js` - JavaScript files
- `/images` - For photo content
- `/audio` - For audio content
- `/videos` - For video content

## Customization

You can further customize the site by:
1. Changing the color scheme by modifying the CSS variables in the `<style>` section at the top of the HTML file
2. Adding or removing sections as needed
3. Updating the fonts by changing the Google Fonts link in the `<head>` section
4. Adding a custom favicon by adding a link in the `<head>` section

## Hosting

This site can be hosted on any web hosting service that supports static HTML websites, including:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Any traditional web hosting service

Simply upload all the files and directories to your hosting provider to make the site publicly accessible.
