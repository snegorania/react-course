import { useState } from "react";
import { nanoid } from "nanoid";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [appState, setAppState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setAppState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  };

  const handleCancel = () => {
    setAppState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  };

  const handleAdd = (project) => {
    setAppState((prev) => {
      let id = nanoid();
      return {
        ...prev,
        selectedProjectId: id,
        projects: [...prev.projects, { ...project, id: id }],
      };
    });
  };

  const handleSelectProject = (id) => {
    setAppState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  };

  const handleDelete = () => {
    setAppState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(el => el.id !== prev.selectedProjectId),
      };
    });
  }

  const handleAddTask = (text) => {
    setAppState((prev) => {
      let id = nanoid();
      return {
        ...prev,
        tasks: [...prev.tasks, { id: id, title: text, projectId: prev.selectedProjectId }],
      };
    });
  }

  const handleClearTask = (id) => {
    setAppState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter(el => el.id !== id),
      };
    });
  }

  let content = (
    <SelectedProject
      project={appState.projects.find(
        (el) => el.id === appState.selectedProjectId
      )}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onClearTask={handleClearTask}
      tasks={appState.tasks.filter(
        (el) => el.projectId === appState.selectedProjectId
      )}
    />
  );

  if (appState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAdd} onCancel={handleCancel} />;
  } else if (appState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={appState.projects}
        onSelectProject={handleSelectProject}
        currentProject={appState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
