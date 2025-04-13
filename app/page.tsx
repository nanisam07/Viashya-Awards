"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Trophy, Users, ChevronRight, Mail, Phone, Award, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    // Function to handle successful loading
    const handleCanPlay = () => {
      // Only try to play if the element is still in the document
      if (videoElement && document.contains(videoElement)) {
        const playPromise = videoElement.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error playing video:", error)
            // Don't throw further errors, just log them
          })
        }
      }
    }

    // Add event listeners
    videoElement.addEventListener("canplay", handleCanPlay)

    // Cleanup function
    return () => {
      // Remove event listeners when component unmounts
      videoElement.removeEventListener("canplay", handleCanPlay)

      // Pause video if component unmounts
      if (videoElement) {
        videoElement.pause()
      }
    }
  }, [])

  useEffect(() => {
    const secondVideoElement = document.querySelector("video:nth-of-type(2)")

    if (!secondVideoElement) return

    const handleCanPlay = () => {
      if (secondVideoElement && document.contains(secondVideoElement)) {
        const playPromise = secondVideoElement.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error playing second video:", error)
          })
        }
      }
    }

    secondVideoElement.addEventListener("canplay", handleCanPlay)

    return () => {
      secondVideoElement.removeEventListener("canplay", handleCanPlay)
      if (secondVideoElement) {
        secondVideoElement.pause()
      }
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const shimmer = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 1.5,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-amber-500" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
            >
              Vaishya Excellence Awards -- sammmuel
            </motion.span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-amber-500 transition-colors">
              About
            </Link>
            <Link href="#categories" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Categories
            </Link>
            <Link href="#details" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Event Details
            </Link>
            <Link href="#nominate" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Nominate
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
            Register Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video ref={videoRef} autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover">
              <source src="https://v0.blob.com/awards-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-amber-900/70 mix-blend-multiply"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="space-y-4">
                <motion.div
                  variants={fadeIn}
                  className="inline-block rounded-full bg-amber-500/20 backdrop-blur-sm px-4 py-1 text-sm text-white border border-amber-500/30"
                >
                  Inaugural Ceremony 2025
                </motion.div>
                <motion.h1
                  variants={fadeIn}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg"
                >
                  <span className="block">Celebrating</span>
                  <span className="block bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                  <span className="block">in the Vaishya Community</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-white/90 md:text-xl max-w-[600px] drop-shadow">
                  Join us for the inaugural Vaishya Excellence Awards, recognizing outstanding achievements and
                  contributions within our community.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0"
                  >
                    Register Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mx-auto lg:order-last relative"
              >
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 opacity-30 blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Awards Ceremony"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover relative z-10 border-2 border-amber-300/30"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-6 -right-6 z-20"
                >
                  <Sparkles className="h-12 w-12 text-amber-300" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 border border-amber-200">
                  Our Legacy
                </div>
                <motion.h2
                  variants={shimmer}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                >
                  About The Awards
                </motion.h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Vaishya Excellence Awards is a pioneering initiative to recognize and celebrate the remarkable
                  achievements of individuals from our community across various fields.
                </p>
              </motion.div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-amber-500/20 opacity-30 blur-xl"></div>
                <Image
                  src="https://v0.blob.com/community-celebration.jpg"
                  alt="Community Celebration"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full relative z-10 border border-amber-200"
                />
                <div className="absolute -top-6 -left-6 z-20 bg-white p-2 rounded-full shadow-lg">
                  <Award className="h-10 w-10 text-amber-500" />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="flex flex-col justify-center space-y-4"
              >
                <ul className="grid gap-6">
                  <motion.li variants={fadeIn}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-amber-700">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To inspire excellence and innovation within the Vaishya community by recognizing outstanding
                        contributions.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-amber-700">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To create a platform that celebrates achievement, fosters unity, and promotes the rich heritage
                        of our community.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-amber-700">Our Values</h3>
                      <p className="text-muted-foreground">
                        Excellence, Integrity, Community Service, Innovation, and Cultural Preservation.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="categories" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 border border-amber-200">
                  Recognition
                </div>
                <motion.h2
                  variants={shimmer}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                >
                  Award Categories
                </motion.h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recognizing excellence across multiple domains that reflect the diverse talents of our community.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8"
            >
              {[
                {
                  title: "Business Excellence",
                  icon: <Trophy className="h-8 w-8 text-amber-500" />,
                  color: "from-amber-500 to-orange-500",
                },
                {
                  title: "Community Service",
                  icon: <Users className="h-8 w-8 text-purple-500" />,
                  color: "from-purple-500 to-violet-500",
                },
                {
                  title: "Education & Research",
                  icon: <Trophy className="h-8 w-8 text-blue-500" />,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Arts & Culture",
                  icon: <Trophy className="h-8 w-8 text-pink-500" />,
                  color: "from-pink-500 to-rose-500",
                },
                {
                  title: "Innovation",
                  icon: <Trophy className="h-8 w-8 text-green-500" />,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Healthcare",
                  icon: <Trophy className="h-8 w-8 text-red-500" />,
                  color: "from-red-500 to-rose-500",
                },
                {
                  title: "Young Achiever",
                  icon: <Trophy className="h-8 w-8 text-yellow-500" />,
                  color: "from-yellow-500 to-amber-500",
                },
                {
                  title: "Lifetime Achievement",
                  icon: <Trophy className="h-8 w-8 text-indigo-500" />,
                  color: "from-indigo-500 to-violet-500",
                },
              ].map((category, index) => (
                <motion.div key={index} variants={fadeIn} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                  <Card className="overflow-hidden border-0 shadow-lg relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`}></div>
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>
                    <CardContent className="p-6 flex flex-col items-center text-center gap-2 relative z-10">
                      <div className="p-3 rounded-full bg-white shadow-md">{category.icon}</div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                      <Link
                        href="#"
                        className={`text-sm flex items-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-medium`}
                      >
                        View Criteria <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="details"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-amber-50 relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 border border-amber-200">
                  Join Us
                </div>
                <motion.h2
                  variants={shimmer}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                >
                  Event Details
                </motion.h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for an evening of celebration and recognition.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8"
            >
              <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-amber-400 to-orange-500 relative">
                    <Image
                      src="https://v0.blob.com/event-calendar.jpg"
                      alt="Event Calendar"
                      fill
                      className="object-cover mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Date & Time</h3>
                      <p className="text-muted-foreground mt-2">
                        September 15, 2025
                        <br />
                        6:00 PM - 10:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                    <Image
                      src="https://v0.blob.com/event-venue.jpg"
                      alt="Event Venue"
                      fill
                      className="object-cover mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Venue</h3>
                      <p className="text-muted-foreground mt-2">
                        Grand Community Hall
                        <br />
                        123 Main Street, City
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="md:col-span-2 lg:col-span-1"
              >
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-indigo-500 relative">
                    <Image
                      src="https://v0.blob.com/event-dress-code.jpg"
                      alt="Dress Code"
                      fill
                      className="object-cover mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Dress Code</h3>
                      <p className="text-muted-foreground mt-2">
                        Formal Attire
                        <br />
                        Traditional Wear Encouraged
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="nominate" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover">
              <source src="https://v0.blob.com/awards-background-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80 mix-blend-multiply"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm text-white border border-white/20">
                  Recognize Excellence
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white drop-shadow-lg">
                  Nominate a Deserving Individual
                </h2>
                <p className="text-white/90 md:text-xl">
                  Do you know someone from our community who has made exceptional contributions? Nominate them for
                  recognition at our inaugural awards ceremony.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button size="lg" className="bg-white text-amber-900 hover:bg-white/90">
                    Nominate Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    View Criteria
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto lg:order-last relative"
              >
                <div className="absolute -inset-4 rounded-xl bg-white/20 opacity-30 blur-xl"></div>
                <Image
                  src="https://v0.blob.com/nomination-image.jpg"
                  alt="Nomination"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover relative z-10 border-2 border-white/30"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -top-6 -left-6 z-20"
                >
                  <Star className="h-12 w-12 text-amber-300" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={fadeIn} className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 border border-amber-200">
                  Timeline
                </div>
                <motion.h2
                  variants={shimmer}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                >
                  Key Dates
                </motion.h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mark your calendar for these important milestones.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="mx-auto grid max-w-3xl gap-6 py-12"
            >
              <motion.div
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 rounded-lg border p-4 bg-white shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-800">Nominations Open</h3>
                  <p className="text-sm text-muted-foreground">June 1, 2025</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 rounded-lg border p-4 bg-white shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-md">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-800">Nominations Close</h3>
                  <p className="text-sm text-muted-foreground">August 15, 2025</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 rounded-lg border p-4 bg-white shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-md">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-800">Finalists Announcement</h3>
                  <p className="text-sm text-muted-foreground">September 1, 2025</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 rounded-lg border p-4 bg-white shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800">Awards Ceremony</h3>
                  <p className="text-sm text-muted-foreground">September 15, 2025</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-10 lg:grid-cols-2 items-center"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Be Part of This Historic Event
                </h2>
                <p className="text-white/80 md:text-xl max-w-[600px]">
                  The inaugural Vaishya Excellence Awards is more than just a ceremony - it's the beginning of a legacy.
                  Join us in celebrating the achievements of our community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-amber-900 hover:bg-white/90">
                    Become a Sponsor
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://v0.blob.com/awards-gallery-1.jpg"
                  alt="Awards Gallery"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover h-full w-full"
                />
                <div className="grid grid-rows-2 gap-4">
                  <Image
                    src="https://v0.blob.com/awards-gallery-2.jpg"
                    alt="Awards Gallery"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full w-full"
                  />
                  <Image
                    src="https://v0.blob.com/awards-gallery-3.jpg"
                    alt="Awards Gallery"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gradient-to-b from-amber-50 to-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Vaishya Excellence Awards
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Celebrating excellence and achievement in our community.</p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-amber-500" />
              <span className="text-sm">contact@vaishyaawards.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-amber-500" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vaishya Excellence Awards. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
