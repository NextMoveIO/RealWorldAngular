# RealWorldAngular

This is the accompanying project for the talk I gave for "Seattle Web App Developers Group" on June 12, 2019 at Avvo's downtown Seattle offices.

I choose a simplistic project, so that:
1. It is easy to follow along
1. The changes between each evolution is small and simple

I didn't talk much about "binding" - because almost all examples and talks dive right into that.

Instead I wanted the 'biggest bang' for the buck (so to speak) and dove right into:
1. Modules
1. Routing
1. Components
1. Containers
1. Forms 
1. Modal dialogs

I called it "Real World" because it is not the typical "hello world" application, but instead it demonstrates the follow 'real world' aspects of building a web page in Angular.
1. Intercepting API calls and changing the base url
1. Intercepting API calls and adding an 'Authorization' header (with a Bearer token) for making authenticated calls to the API
1. Demonstrating best practices - like creating a Service for API calls, conversion of requests & responses to & from the API (for example, to take care of JSON date object and C#/ASP.Net date string, for example)
