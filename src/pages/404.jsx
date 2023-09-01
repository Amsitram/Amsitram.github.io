import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const NotFound = () => (
  <Layout>
    <Seo title="404 - Not Found" />
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Svg icon="loup" hiddenMobile width={48} color="icon_orange" left="10%" top="20%" />
            <Svg icon="lapin" width={48} color="icon_red" left="60%" top="70%" />
            <Svg icon="poussin" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="renard" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="owlcat" width={12} color="icon_brightest" left="90%" top="50%" />
            <Svg icon="roi" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="banane" width={16} color="icon_darkest" left="30%" top="65%" />
            <Svg icon="espadon" width={16} color="icon_pink" left="28%" top="15%" />
            <Svg icon="baleine" width={6} color="icon_darkest" left="75%" top="10%" />
            <Svg icon="écureuil" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
          </UpDownWide>
          <Svg icon="requin" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
          <Svg icon="lamétoile" width={6} color="icon_darkest" left="4%" top="20%" />
          <Svg icon="antilope" width={12} color="icon_darkest" left="50%" top="60%" />
          <Svg icon="oiseau" width={8} color="icon_darkest" left="95%" top="90%" />
          <Svg icon="éléphant" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
          <Svg icon="guêpe" width={8} color="icon_darker" left="25%" top="5%" />
          <Svg icon="cheval" width={64} color="icon_green" left="95%" top="5%" />
          <Svg icon="feu" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
          <Svg icon="araignée" width={6} color="icon_darkest" left="10%" top="10%" />
          <Svg icon="fantôme" width={12} color="icon_darkest" left="40%" top="30%" />
          <Svg icon="loup" width={16} color="icon_darker" left="10%" top="50%" />
          <Svg icon="lapin" width={8} color="icon_darker" left="80%" top="70%" />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>404 - Page not found</Themed.h1>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default NotFound
