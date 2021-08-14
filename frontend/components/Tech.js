const Tech = ({ skills }) => {
  return (
    <div className="sm:py-32 py-20">
      <p className="sm:text-2xl text-xl font-medium mb-8">
        Technologies I work with:
      </p>
      <div className="flex flex-wrap max-w-7xl w-full">
        {skills.map((skill) => (
          <span className="skill" key={skill.id}>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tech;
