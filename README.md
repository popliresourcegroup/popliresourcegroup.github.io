This website is maintained by Anirudh Katoch

Theme is urban-theme, which is MIT licensed

## Technical details

The source of the site is stored as templates, html files and markdown files

These are fed into Jekyll to generate static site pages that are ready to be hosted
https://jekyllrb.com/docs/

I'm using Github Actions to automatically publish any commits to the main branch on GH-Pages - https nidhi(dot)studio

### Images

High resolution images are not directly uploaded to the site, as we don't want them to be publicly accessible.

I've written a script that takes a folder full of high resolution painting images as input, and outputs the same high resolution painting with a watermark, as well as a low resolution version without the watermark (for thumbnails). https://github.com/nidhi-studio/nidhi-studio.github.io/blob/master/auto_image_convert.sh

The thumbnail images should be used in listings, and the watermarked high-res images on the pages for each painting

### Editing

Editing the html, templates etc. requires you to directly interact with the files here on git, and fix them.

Editing the content of individual pages, uploading images, adding new paintings or exhebition mentions, editing, deleting etc. can be done via the third party tool `Forestry.io`, and indeed the process has been written with consideration to let non-technical people easily edit the markdown content via forestry.io

On forestry.io I have set up an account, with templates and rules set up to make the process slightly idiot proof (but not enough). One can log in there and edit stuff. Once one saves, changes are comitted, and GH-Actions publishes the new site version.



