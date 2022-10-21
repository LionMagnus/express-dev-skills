const skills = [
    {id: 115632, skill: 'HTML', done: true},
    {id: 126221, skill: 'CSS', done: true},
    {id: 138609, skill: 'Javascript', done: true},
    {id: 142647, skill: 'Node.js', done: false},
    {id: 157910, skill: 'Express', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }