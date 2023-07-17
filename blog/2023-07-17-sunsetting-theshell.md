---
title: "Sunsetting theShell"
tags: [theshell]
author: Victor Tran
author_image_url: /img/blog-vt.svg
---

import CaptionContainer from "../src/components/common/caption-container";
import LightboxImage from "../src/components/common/lightboximage";

After 7 years, it's finally time to say goodbye to theShell.
<!-- truncate -->

## A bit of history
theShell started as a project back in 2016 when I was in high school, and as I was discovering how to write code for Linux using Qt and C++. It was theShell that taught me how desktop Linux worked behind the scenes, and set the foundations for all of my future Linux desktop projects - theDesk, theBeat (and the rest of the software suite)

Unfortunately, as all first projects are, the code quality of theShell was not up to scratch, and hard to maintain. Adding features kept getting harder, and the performance of theShell noticably tanked the more I added to it. As a result, I started working on a completely new desktop environment in 2020 - theDesk.

Now that theDesk is finally released, it's time to close the curtains on theShell and look forward with theDesk.

## What this means for theShell
theShell will not receive any more functional or security updates. The source code of theShell will remain available, as always, on [GitHub](https://github.com/vicr123/theshell), but it will be archived.

## The way forward
If you've been using theShell, now is a great time to move over to theDesk - it's been designed for theShell users to feel right at home, whilst being more stable and easier to maintain.

Thanks,<br />
Victor :)

## Gallery
<CaptionContainer caption={<span>The Status Center in theShell 2.0 (2016)</span>}>
    <LightboxImage src={"/blogAssets/theshell-2-status-center.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>Notifications in theShell 2.0 (2016)</span>}>
    <LightboxImage src={"/blogAssets/theshell-2-notification.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>The Bar in theShell 2.0 (2016)</span>}>
    <LightboxImage src={"/blogAssets/theshell-2-bar.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>theShell documentation from 2016</span>}>
    <LightboxImage src={"/blogAssets/theshell-docs-2016.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>A screenshot of theShell 6.0, taken in April 2017</span>}>
    <LightboxImage src={"/blogAssets/theshell-6.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>System Settings in theShell 6.0 (2017)</span>}>
    <LightboxImage src={"/blogAssets/theshell-6-system-settings.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>The status bar, introduced in theShell 6.0</span>}>
    <LightboxImage src={"/blogAssets/theshell-6-status-bar.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>The power off sequence from 2017</span>}>
    <LightboxImage src={"/blogAssets/theshell-6-power-off.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>Initial setup welcome animation from theShell 8.0 (2018)</span>}>
    <video controls={true} style={{width: "100%"}}>
        <source src={"/blogAssets/theshell-8-onboarding.webm"} width="100%" />
    </video>
</CaptionContainer>
<CaptionContainer caption={<span>The status center in theShell 8 (from 2018)</span>}>
    <LightboxImage src={"/blogAssets/theshell-8-status-center.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>The light theme in theShell 8 (from 2018)</span>}>
    <LightboxImage src={"/blogAssets/theshell-8-light-theme.png"} width="100%" />
</CaptionContainer>
<CaptionContainer caption={<span>Wind animation from theShell Blueprint that was never released</span>}>
    <video controls={true} style={{width: "100%"}}>
        <source src={"/blogAssets/theshell-blueprint-weather.webm"} width="100%" />
    </video>
</CaptionContainer>