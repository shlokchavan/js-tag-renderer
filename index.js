const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/js-tag/:placement/:campaign', (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    placement = req.params.placement;
    campaign = req.params.campaign;
    query_params = req.query;
    js_tag = `<ins class="dcmads" style="display:inline-block;width:${query_params["width"]};height:${query_params["height"]}" data-dcm-placement="${placement}/${campaign}" data-dcm-rendering-mode="script" data-dcm-https-only data-dcm-gdpr-applies="gdpr=${'${GDPR}'}" data-dcm-gdpr-consent="gdpr_consent=${'${GDPR_CONSENT_755}'}" data-dcm-addtl-consent="addtl_consent=${'${ADDTL_CONSENT}'}" data-dcm-ltd="false" data-dcm-resettable-device-id="" data-dcm-app-id=""> <script src="https://www.googletagservices.com/dcm/dcmads.js"></script> </ins>`
    raw_html_content = `<!DOCTYPE html><html><head><title>DCM Ad Example</title></head><body>{js_tag}</body></html>`
    html_content = raw_html_content.replace('{js_tag}', js_tag)  
    console.log(html_content);
    res.send(html_content);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})