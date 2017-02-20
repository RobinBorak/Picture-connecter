### The NgModule
- *global.module*.ts: An Angular Module for global app code that doesn't make sense in a feature module

## NgModule Contents

### App Services

- *app-config*.service.ts: Stores and retrieves the user's application preferences
- *auth.service*.ts: Simulates an authentication service

### Router Hooks

- *auth.hook*.ts: A transition hook which allows a state to declare that it requires an authenticated user
