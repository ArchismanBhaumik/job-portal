const Jobs = [
  {
    jobId: 1,
    title: 'React Js Developer',
   experience:{
      min:3,
      max:4
    } ,
    skills: ['React', 'Javascript', 'HTML5', 'CSS3'],
    applied: false,
    approved:true,
    jobType:'IT'
  },
  {
    jobId: 2,
    title: 'NodeJs Developer',
    experience:{
      min:0,
      max:2
    } ,
    skills: ['Node', 'Express', 'Javascript', 'HTML5', 'CSS3', 'Jenkins', 'AWS'],
    applied: false,
    approved:true,
    jobType:'IT'
  },
  
  {
    jobId: 3,
    title: 'HR',
    experience:{
      min:3,
      max:4
    } ,
    skills: ['MS EXCEL','Darwin Box','MS Word'],
    applied: false,
    approved:true,
    jobType:'NON-IT'
  },
];

export default Jobs;