import Link from "next/link"
import { useEffect } from "react"

export default function Page({ params }) {
  const { slug } = params

  return (
    <>
      <h2>hello {slug}</h2>
    </>
  )
}
