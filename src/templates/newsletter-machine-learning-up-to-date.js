import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import slugger from 'github-slugger';

import TitlePage from '../components/TitlePage';
import SEO from '../components/seo';

import * as S from '../components/Content/styled';

const TableOfContents = (application_articles, theory_articles) => {
  return (
    <div id='toc'>
      <h1>Application</h1>
      <ul>
        {application_articles.map(article => {
          return <li>
            <a href={article.htmlIdSlug}>{article.title}</a>
          </li>
        })}
      </ul>
      <h1>Theory</h1>
        {theory_articles.map(article => {
          return <li>
            <a href={article.htmlIdSlug}>{article.title}</a>
          </li>
        })}
    </div>
  )
}

const Article = article => {
  return (
    <>
      <h1 id={article.htmlId}>
        {article.title}
        <a href='#toc' className='jump'>    ☝</a>
      </h1>
      <figure>
        <Img fluid={article.imageData.childImageSharp.fluid} />
        <figcaption>
          {article.imageCaption.text} [<a href={article.imageCaption.href}>Source</a>]
        </figcaption>
      </figure>
      <blockquote>
        {article.excerpt}
        <br />
        <a href={article.links[0].href}>... keep reading</a>
      </blockquote>
      <div>
        The Rundown
        <ul>
          {article.links.map(link => {
            return <li>
              <a href={link.href}>{link.text}</a>
            </li>
          })}
        </ul>
      </div>
      <hr></hr>
    </>
  )
}

const render = ({ data, pageContext }) => {
  
  const imageData = data.allFile.nodes
  let content = pageContext.content

  // form a lookup of image basename (with extension) -> image
  let imageLookup = {}
  imageData.forEach(image => {
    imageLookup[image.base] = image
  })

  // use the image map to insert image data in the articles
  content.articles.forEach(article => {
    article.imageData = imageLookup[article.image.split('/')[3]]
  })

  // let application_articles = []
  // let theory_articles = []
  let featured = null
  content.articles.forEach(article => {
    // create the HTML Id (slug) for each article header
    article.htmlId = article.header || slugger.slug(article.title)
    article.htmlIdSlug = '#' + article.htmlId
  })
  const application_articles = content.articles.filter(article => 'application' === article.category)
  const theory_articles = content.articles.filter(article => 'theory' === article.category)

  // detect featured image
  featured = content.articles.filter(article => article.featured)[0]

  const title = `Machine Learning Up to Date #${content.article_num}`

  return (
    <S.Content>
      <SEO
        title={title}
        description={content.description}
        image={featured.image}
      />
      <TitlePage text={title} />
      <Img fluid={featured.imageData.childImageSharp.fluid} />
      <figcaption>
        {featured.imageCaption.text} [<a href={featured.imageCaption.href}>Source</a>]
      </figcaption>

      <p>
        Here's ML UTD #{content.article_num} from the <a href="https://lifewithdata.org">LifeWithData</a> blog! 
        We help you separate the signal from the noise in today's hectic front lines of software engineering and machine learning.
        <br /><br />
        <a href="https://lifewithdata.org">LifeWithData</a> strives to deliver curated machine learning & software 
        engineering updates that point the reader to key developments without superfluous details. 
        This enables frequent, concise updates across the industry without information overload.
      </p>
      <hr></hr>

      {TableOfContents(application_articles, theory_articles)}
      <hr></hr>

      {application_articles.map(Article)}
      {theory_articles.map(Article)}
    </S.Content>
  );
};

export const query = graphql`
  query MachineLearningUpToDateArticle($imagesGlob: String!) {
    allFile(filter: {base: {glob: $imagesGlob}}) {
      nodes {
        base
        absolutePath
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default render;
