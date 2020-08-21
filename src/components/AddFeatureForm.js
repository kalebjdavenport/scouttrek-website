import React, { useState } from "react"

const AddFeatureForm = () => {
  const [name, setName] = useState("")
  const [troopNumber, setTroopNumber] = useState("")
  const [text, setText] = useState("")

  return (
    <section id="feedback">
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="featureRequests"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ padding: "4rem .4rem 0 .4rem" }}>
          Have an idea about how to make ScoutTrek better? Please share below.
        </h2>
        <input type="hidden" name="form-name" value="featureRequests" />
        <label style={{ margin: "0.4rem" }}>
          Full Name:
          <input
            style={{ fontWeight: "regular", width: "100%", padding: "0.4rem" }}
            type="text"
            name="Name"
            value={name}
            onChange={e => {
              e.preventDefault()
              setName(e.target.value)
            }}
          />
        </label>
        <label style={{ margin: "0.4rem" }}>
          Troop Number:
          <input
            style={{ fontWeight: "regular", width: "100%", padding: "0.4rem" }}
            type="text"
            name="TroopNumber"
            value={troopNumber}
            onChange={e => {
              e.preventDefault()
              setTroopNumber(e.target.value)
            }}
          />
        </label>
        <label style={{ margin: "0.4rem" }}>
          Tell us your ideas about how to improve ScoutTrek:
          <textarea
            style={{
              fontWeight: "regular",
              width: "100%",
              padding: "0.4rem",
              minHeight: "8rem",
            }}
            name="Idea"
            value={text}
            onChange={e => {
              e.preventDefault()
              setText(e.target.value)
            }}
          />
        </label>
        <input
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            margin: "0.4rem",
            width: "10rem",
            borderRadius: "2px",
          }}
          type="submit"
          value="Submit"
        />
        <input type="hidden" name="bot-field" />
      </form>
    </section>
  )
}

export default AddFeatureForm
