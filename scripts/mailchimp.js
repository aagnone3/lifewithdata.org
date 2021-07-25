const fs = require('fs');

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '5218fbb70998483423229b4334ab3537-us4',
  server: 'us4',
});

async function createCampaign({ emailListId, article_num, template_id }) {
  const response = await mailchimp.campaigns.create({
    type: 'regular',
    recipients: {
      list_id: emailListId
    },
    settings: {
      subject_line: `Machine Learning Up to Date #${article_num}`,
      preview_text: 'preview_text',
      title: `API Machine Learning Up to Date #${article_num}`,
      from_name: 'anthony@lifewithdata.org',
      reply_to: 'anthony@lifewithdata.org',
      // use_conversation: '',
      // to_name: '',
      // folder_id: '',
      // authenticate: true,
      // auto_footer: false,
      // inline_css: false,
      // template_id
    },
    tracking: {
      google_analytics: `mlutd${article_num}`
    },
    // content_type: 'template'
  });
  return response
}

async function createEmailTemplate({ article_num, html }) {
  const response = await mailchimp.templates.create({
    name: `Machine Learning Up to Date #${article_num}`,
    html: html
  });
  return response;
}

(async () => {
  const emailListId = 'e4e9d417cd';
  const article_num = 34;
  const html = fs.readFileSync('etc/template.html', 'utf-8')

  // const response = await mailchimp.lists.getAllLists()
  // console.log(response)

  // const template = await createEmailTemplate({ article_num, html });

  // const campaign = await createCampaign({ emailListId, article_num, template_id: 312792 })
  // console.log(campaign)
  // const response = await mailchimp.campaigns.setContent(campaign.id, html)
  const response = await mailchimp.campaigns.setContent("a808986515", { html })
  // if (!!response.status) {
  //   console.error(`Error setting campaign content: ${response.title}`)
  //   // console.error(response.detail)
  // }
  // console.log(campaign)
})()
