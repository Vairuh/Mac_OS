import React from "react";
import Macwindow from "./Macwindow";
import Terminal from "react-console-emulator";
import "./Cli.scss"

const Cli = ({windowname, setwindowstate}) => {
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        about: {
            description: 'Learn about me.',
            usage: 'about',
            fn: () => 'Hi! I\'m Vairuh, a passionate developer creating amazing web experiences.'
        },
        skills: {
            description: 'List my technical skills.',
            usage: 'skills',
            fn: () => 'React • JavaScript • Node.js • CSS/SCSS • Python • Git • VS Code'
        },
        projects: {
            description: 'View my recent projects.',
            usage: 'projects',
            fn: () => '1. Portfolio Website\n2. E-commerce Platform\n3. Task Management App\n4. Weather Dashboard'
        },
        contact: {
            description: 'Get my contact information.',
            usage: 'contact',
            fn: () => 'Email: vairuh@example.com\nLinkedIn: linkedin.com/in/vairuh\nGitHub: github.com/vairuh'
        },
        help: {
            description: 'Show all available commands.',
            usage: 'help',
            fn: () => Object.entries(commands)
                .map(([cmd, obj]) => `${cmd.padEnd(12)} - ${obj.description}`)
                .join('\n')
        }
    };

    const welcomeMessage = `
╔═══════════════════════════════════════╗
║   Welcome to Vairuh's Terminal!      ║
╚═══════════════════════════════════════╝

Available commands:
${Object.entries(commands)
    .map(([cmd, obj]) => `  ${cmd.padEnd(12)} - ${obj.description}`)
    .join('\n')}

Type 'help' to see this list again.
    `;

    return (
        <Macwindow windowname={windowname} setwindowstate={setwindowstate}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={"Vairuh-zsh:~$"}
                    promptLabelStyle={{color: "lime", fontWeight: "bold"}}
                    noDefaults={true}
                />
            </div>
        </Macwindow>
    )
}

export default Cli
