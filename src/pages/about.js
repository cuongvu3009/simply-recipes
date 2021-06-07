import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably
            </p>
            <Link to="/contact" class="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            className="about-img"
            alt="about-img"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
