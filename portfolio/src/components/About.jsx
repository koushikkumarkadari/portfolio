export default function About() {
  return (
    <section id="about" className="py-6 md:py-16 px-4 md:px-16 md:px-20 bg-black text-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <img src="https://i.ibb.co/vxJV32rq/1715188352121.png" alt="Profile picture of John Doe" className="w-32 h-32 rounded-full mx-auto mb-6" />
        <p className="text-lg  ">
          I'm a passionate web developer with expertise in creating responsive and interactive websites.
          Skilled in modern frontend and backend technologies like React, Tailwind CSS, MongoDB, ExpressJS, NodeJs, I love to turning
          ideas into visually appealing and functional digital experiences.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Want to know more about my experience?{' '}
          <a
            href="https://drive.google.com/file/d/1Ka8rv-4w9x1rEurnuG-91l-18tFbkB5B/view?usp=sharing"
            download
            className="text-blue-600 hover:underline font-semibold"
            aria-label="Download my resume"
          >
            Download my resume
          </a>{' '}
          to see my full background and qualifications.
        </p>
      </div>
    </section>
  );
}