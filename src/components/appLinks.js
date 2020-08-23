import React from "react"
import LogoApple from "react-ionicons/lib/LogoApple"
import LogoAndroid from "react-ionicons/lib/LogoAndroid"

import "./appLinks.css"

const AppLinks = () => {
  return (
    <>
      <div class="app-link">
        <LogoApple onClick={() => {}} fontSize="60px" />
        <a href="https://testflight.apple.com/join/qNAp55bd">Download</a>
        for
        <h6>Troop 800</h6>
      </div>
      <div class="app-link">
        <LogoApple onClick={() => {}} fontSize="60px" />
        <a href="https://testflight.apple.com/join/irMKo9ty">Download</a>
        for
        <h6>Troop 36</h6>
      </div>
      <div class="app-link">
        <LogoApple onClick={() => {}} fontSize="60px" />
        <a href="https://testflight.apple.com/join/lXCCDqaM">Download</a>
        for
        <h6>Troop 1718</h6>
      </div>
      <div class="app-link">
        <LogoAndroid onClick={() => {}} fontSize="60px" />
        <a href="https://play.google.com/store/apps/details?id=com.wowyourclient.scouttrek">
          Download
        </a>
      </div>
    </>
  )
}

export default AppLinks
