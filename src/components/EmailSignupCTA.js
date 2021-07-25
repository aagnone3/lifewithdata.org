import React from 'react';

const mailchimpHTML = `
<div style="margin: auto;">
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://lifewithdata.us4.list-manage.com/subscribe/post?u=41f6f5cd8bf0ac1a669327c66&amp;id=e4e9d417cd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h1 style="text-align: center;font-size: 3rem;">Software | Cloud | Machine Learning</h1>
	<h2 style="text-align: center;font-size: 2rem;">Get the Weekly Newsletter</h2>
<div class="mc-field-group">
	<label for="mce-EMAIL" style="margin-bottom: 1.5rem;font-size: 1.5rem;">Email Address<span class="asterisk">*</span></label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_41f6f5cd8bf0ac1a669327c66_e4e9d417cd" tabindex="-1" value=""></div>
    <div class="clear">
        <input type="submit" value="Count Me In" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color:blue; font-weight:bold">
    </div>
    </div>
</form>
</div>
</div>
`;

const render = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: mailchimpHTML }}></div>
    )
}

export default render;