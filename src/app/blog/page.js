import React from "react"
import withAuth from "@/utils/auth"
const page = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default withAuth(page);
