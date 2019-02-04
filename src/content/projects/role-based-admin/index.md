---
order: 4
title: React Role Based Admin
thumbnail: ./admin_1.png
description: Role based administration system built in React
codeLink: https://github.com/massivelines/role-based-admin
liveLink: https://massivelines.github.io/role-based-admin
icons: [react, typescript, router, apollo, graphql, sass, bootstrap]
---

This administration system allowed users to be assigned to a project, and there access limited inside that project based on the assigned role.

Administrators could add new users, edit users, and assign them to projects and roles.

Users were also able to control what type of two-factor authorization setup they wanted to use and their own account details.

I built the GraphQL schema using mock data and graphql-tools so I could do real API calls to generate the data needed. This allowed the system to almost be a drop in after the resolvers and mutations were completed.

This was built for the Harbinger eDiscovery web app, I am allowed to use it in my portfolio, but I had to remove data and functionality due to the NDA.

<code-links code="https://github.com/massivelines/role-based-admin" live="https://massivelines.github.io/role-based-admin"></code-links>

### User Panel

![User Panel](admin_2.png)

### Edit and Add New Users

![Edit User](admin_6.png)

### Personal Settings and Security

![Personal Settings and Security](admin_5.png)
