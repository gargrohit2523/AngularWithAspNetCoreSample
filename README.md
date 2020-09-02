# AngularWithAspNetCoreSample
Basic angular setup with Asp.net core API

To run projects:

1) Front end
  a) run 'npm install' first
  b) run 'ng serve' to run app at localhost:4200

2) API
  Simply click on run button in Visual studio. Ensure to select project name in the selections i.e. PharmacyAPI

Details: 
Front end calls https://localhost:5001 which is endpoint for Pharmacy API

In API, repository singleton is taken intentionally to replicate data store for testing purposes. ideally it should be scoped

Functionality implemented:

SPA App - Medicine grid, display rules, routing, Edit medicine

API - using Asp.net core and sample Unit test project
