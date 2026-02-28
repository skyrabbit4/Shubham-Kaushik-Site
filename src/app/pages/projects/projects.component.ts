import { Component } from '@angular/core';
import { projects as projectsData, Project } from '../../data/projects'; 

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    public projects: Project[] = projectsData;
}