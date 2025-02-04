import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState, useEffect } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  useEffect(() => {
    const projectCookies = document.cookie.split('; ').find(row => row.startsWith('projects='));
    const projects = projectCookies ? JSON.parse(projectCookies.split('=')[1]) : null;
    if(projects) {
      setProjectsState(prevState => {
        return {
          ...prevState,
          projects: projects,
        }
      })
    }
  }, [])

  function handleUpdateCookie(projects) {
    document.cookie = `projects=${JSON.stringify(projects)}; max-age=86400; path=/`;
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null,
      }
    })
  }

  function handleAddProject(projectData) {  
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      const updatedProjects = [...prevState.projects, newProject];
      handleUpdateCookie(updatedProjects);

      return {
        ...prevState,
        projects: updatedProjects,
        selectedProject: undefined,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: projectId,
      }
    })
  }

  function handleDeleteProject(projectId) { 
    setProjectsState(prevState => {
      const updatedProjects = prevState.projects.filter(p => p.id !== projectId);
      handleUpdateCookie(updatedProjects);
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProject: undefined,
      }
    })
  }

  function handleAddTask(task) {

  }

  function handleDeleteTask(taskId) {

  }

  let content = <SelectedProject 
                  project={projectsState.projects.find(p => p.id === projectsState.selectedProject)} 
                  handleDeleteProject={handleDeleteProject} 
                  handleAddTask={handleAddTask} 
                  handleDeleteTask={handleDeleteTask}
                />;

  if(projectsState.selectedProject === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />
  }
  else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 grid gap-4 grid-cols-[25%_1fr] md:grid-cols-[20%_1fr]">
      <Sidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject} 
        selectedProject={projectsState.selectedProject}
      />
      <div className="main-area">
        {content}
      </div>
    </main>
  );
}

export default App;
