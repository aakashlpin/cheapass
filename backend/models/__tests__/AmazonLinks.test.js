const { getSanitizedUrl } = require('../AmazonLinks')._tests;

describe('Model::AmazonLinks', () => {
  it ('Correctly sanitizes the URL with ASIN code in it', () => {
    const url = 'https://www.amazon.in/Three-Thousand-Stitches-Ordinary-Extraordinary-ebook/dp/B07354X2GJ?_encoding=UTF8&portal-device-attributes=desktop&redirect=true&ref_=s9_acss_bw_cg_AWin8_1b1_w';

    const newUrl = 'http://www.amazon.in/dp/B07354X2GJ';

    expect(getSanitizedUrl(url)).toEqual(newUrl);
  });

  it ('Correctly sanitizes the URL without ASIN code in it', () => {
    const url = 'https://www.amazon.in/Three-Thousand-Stitches-Ordinary-Extraordinary-ebook/?_encoding=UTF8&portal-device-attributes=desktop&redirect=true&ref_=s9_acss_bw_cg_AWin8_1b1_w';

    const newUrl = url;

    expect(getSanitizedUrl(url)).toEqual(newUrl);
  });
});

