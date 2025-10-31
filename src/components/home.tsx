import HeroSection from './HeroSection';
import ProjectGallery from './ProjectGallery';
import AboutSection from './AboutSection';
import Footer from './Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      <HeroSection 
        name="Azim Pial"
        title="3rd Year CSE Student"
        bio="Motivated 3rd-year Computer Science & Engineering student seeking opportunities to apply academic knowledge, develop practical skills, and contribute to innovative tech solutions. Aspiring to build impactful tech startups in the future."
        photoUrl="https://i.imgur.com/i5JB60d.jpeg"
        contacts={{
          codeforces: "https://codeforces.com/profile/Azim_Pial",
          github: "https://github.com/AzimPial",
          linkedin: "https://linkedin.com/in/azimpial",
          email: "azimpiyal@gmail.com"
        }}
        techTools={["C", "C++", "Python", "Java", "App Development (Learning)", "VS Code", "Git", "Codeforces", "Firebase", "AI Tools"]}
        softSkills={["Problem Solving", "Teamwork", "Communication", "Fast Learner"]}
      />
      <ProjectGallery />
      <AboutSection 
        bio="Motivated and growth-driven Computer Science student with strong problem-solving skills and hands-on experience in software tools, AI technologies, and competitive programming. Passionate about building digital solutions, especially in the context of Bangladesh's real-world challenges. Skilled in teamwork, communication, and adapting to new technologies. Currently enhancing expertise in full-stack development, cloud platforms, and AI-assisted workflows, while exploring innovative ways to support local businesses through technology and automation."
      />
      <Footer 
        githubUrl="https://github.com/AzimPial"
        codeforcesUrl="https://codeforces.com/profile/Azim_Pial"
        linkedinUrl="https://linkedin.com/in/azimpial"
      />
    </div>
  );
}

export default Home;