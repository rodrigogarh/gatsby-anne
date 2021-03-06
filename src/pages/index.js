import * as React from 'react';
import Helmet from 'react-helmet';

import { graphql, StaticQuery } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';
import MuitoAmor from '../components/MuitoAmor';
import NossoCardapio from '../components/NossoCardapio';
import SEO from '../components/seo';
import VejaMais from '../components/VejaMais';
import MediaStories from '../components/MediaStories';
import NewsLetterSection from '../components/NewsLetterSection';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script>
        {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '374116829696592');
    fbq('track', 'PageView');`}
      </script>
      <noscript>
        {`<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=374116829696592&ev=PageView&noscript=1"
  />`}
      </noscript>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-814054608" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-814054608');`}
      </script>
      <script>
        {`function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-814054608/Xm6_CI_K5H4Q0PmVhAM',
            'event_callback': callback
        });
        return false;
      }`}
      </script>
    </Helmet>
    <StaticQuery
      query={graphql`
        {
          allWordpressPage {
            edges {
              node {
                id
                title
                acf {
                  home_title
                  cardapio {
                    title
                    description
                  }
                  gallery {
                    title
                    source_url
                  }
                  testimony {
                    title
                    content
                    content_2
                    content_3
                  }
                  more_section {
                    title
                    description
                    image_1 {
                      source_url
                    }
                    image_2 {
                      source_url
                    }
                    image_3 {
                      source_url
                    }
                    image_4 {
                      source_url
                    }
                    image_5 {
                      source_url
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={props => {
        const wordpressData = props.allWordpressPage.edges['0'].node.acf;
        const cardapioData = wordpressData.cardapio;
        const testimonyData = wordpressData.testimony;
        const moreSectionData = wordpressData.more_section;
        const galleryData = wordpressData.gallery;

        return (
          <React.Fragment>
            <SEO
              title="Encomenda de Doces, Tortas e Bolos | Anne Schuartz"
              keywords={[`doces`, `tortas`, `bolos`]}
            />
            <Hero title={wordpressData.home_title} />
            <NossoCardapio {...cardapioData} />
            <MediaStories title="Ver galeria" galleryData={galleryData} />
            <MuitoAmor {...testimonyData} />
            <VejaMais {...moreSectionData} />
            <NewsLetterSection />
          </React.Fragment>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
