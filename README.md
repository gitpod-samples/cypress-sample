# gitpod-cypress

This is an unofficial repo demonstrating how to use Cypress with Gitpod.

## Setup

1. [This](https://github.com/kylos101/gitpod-cypress/blob/f6206606472e2b1cdf075509403dd6adc53b9ff8/.gitpod.Dockerfile#L1) base image is needed, because it included VNC and other supporting software.
2. [These](https://github.com/kylos101/gitpod-cypress/blob/f6206606472e2b1cdf075509403dd6adc53b9ff8/.gitpod.Dockerfile#L6-L17) dependencies must be installed for Cypress to work.
3. [These](https://github.com/kylos101/gitpod-cypress/blob/f6206606472e2b1cdf075509403dd6adc53b9ff8/.gitpod.yml#L11-L12) tasks initialize the workspace, to install npm packages and setup cypress in `/workspace`.
4. [These](https://github.com/kylos101/gitpod-cypress/blob/f6206606472e2b1cdf075509403dd6adc53b9ff8/.gitpod.yml#L15-L16) tasks run headless chrome tests, and open the Cypress suite, which is accessible on port 6080 via the VNC web browser.

## Tips

On workspace start, a new tab will be opened for the VNC web viewer. If you don't see it, you may need to allow/trust the host running Gitpod.