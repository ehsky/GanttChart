# Project and resource mgmt in Gantt chart

This project includes a project focused gantt chart to show light overview of resource allocations.

![Content aware project](/.assets/ganttChart.png)

## Setup

After install assign the permission set `View and manage Gantt Chart` to your user.

### Scratch org setup

After you have created the scratch org assign `sfdx force:user:permset:assign --permsetname viewAndmanageGanttChart`.
This repo includes a user definition file. You can spin up that using `sfdx force:user:create --definitionfile config/user-def.json`.

## Gantt Chart consist of following components

### LWCs

- Gantt Chart
- Gantt chart modal
- Gantt chart resource

### Aura

- Gantt chart wrapper

### Objects

- Project
- Resource
- Allocation

The component is content aware.
If the component is drag out onto the project record it pre-filters to show only resources for that project.

![Content ware project](/.assets/contentAwareProject.png)

If the component is drag out onto the resource record it pre-filters to show all projects for that person.

![Content ware resource](/.assets/contentAwareResource.png)
