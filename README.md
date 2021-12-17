# Project and resource mgmt in Gantt chart

This repo includes project focused gantt chart to show a light overview of resource allocations.
It is hosted and built on the salesforce platform.

![Content aware project](/.assets/ganttChart.png)

## Deployment

You can use the quick installer here to deploy directly to your org.

[![Deploy to salesforce](/.assets/deploy.png)](https://githubsfdeploy.herokuapp.com/?owner=ehsky&repo=GanttChart)

After install assign the permission set `View and manage Gantt Chart` to relevant users.

## Scratch org setup

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
