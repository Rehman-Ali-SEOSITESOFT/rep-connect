import { useRouter } from "next/router"

const CourseVideoPage = () => {
  const router = useRouter()
  const { course } = router.query
  return (
    <>
      <h3>{course}</h3>
    </>
  )
}

export default CourseVideoPage
