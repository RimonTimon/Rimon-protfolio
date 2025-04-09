

    const texts = [
      "Backend Developer.",
      "Django Specialist.",
      "API Engineer.",
      "Database Architect.",
      "Tech-Driven Mind.",
      "Software Craftsman.",
      "Efficient Coder.",
      "Problem Solver.",
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const speed = 100;
    const pause = 1500;

    (function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById("dynamic-text").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, pause);
      } else {
        setTimeout(type, speed);
      }
    })();

    // Skill Bar Animation
    document.querySelectorAll(".skill-progress").forEach((bar) => {
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = bar.dataset.width || "80%";
      }, 100);
    });

    fetch("project.json")
      .then((response) => response.json())
      .then((projects) => {
        const grid = document.getElementById("workGrid");

        projects.forEach((project) => {
          const item = document.createElement("a");
          item.className = "work-item";
          item.href = project.link;
          item.target = "_blank"; // opens in a new tab
          item.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            `;
          grid.appendChild(item);
        });
      })
      .catch((error) => console.error("Failed to load project data:", error));

    fetch("skills.json")
      .then((response) => response.json())
      .then((skills) => {
        const container = document.getElementById("skillsContainer");

        skills.forEach((skill) => {
          const skillDiv = document.createElement("div");
          skillDiv.className = "skill";

          skillDiv.innerHTML = `
                  <div class="skill-name">${skill.name}</div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                  </div>
                `;

          container.appendChild(skillDiv);
        });
      })
      .catch((error) => console.error("Error loading skills:", error));
