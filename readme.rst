Seattle Times Parallax Slider Template
======================================

What is it?
-----------

This is a template for building full-screen photo sliders, similar to `our
Super Bowl plays <projects.seattletimes.com/2015/seahawks-top-
moments/superbowl/>`__. It's based on our `news app template
<https://github.com/seattletimes/newsapp-template>`__, so see that project for
documentation on installation and required software. The instructions below
will assume that you have grunt-init and the template installed, and that you
named it "parallax".

Usage
-----

1. In Google Sheets, create a new workbook. Name it whatever you want, but then use the File->Publish to the Web menu item to make it publicly accessible. A demo sheet with the correct columns that you can duplicate is located `here <https://docs.google.com/spreadsheets/d/1eet9CwIu194AJQSc3FXDc7e4ZuE8S2s0PqO0XWcnE5E/edit?usp=sharing>`_.
2. Create a new folder. It may be easiest to do this from the GitHub client, since that will let you immediately open the command line there.
3. From the command line, run ``grunt-init parallax`` to start the guided setup.
4. Some questions will provide defaults, but you'll need to know the spreadsheet ID to fully set up your template. The ID is in the URL, in the section marked by the X's: ``https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/edit``. You can paste into Git Bash by right-clicking on the window.
5. The wizard should complete by downloading the required libraries to run the template, then return you to the command line. Type ``grunt`` to start the local server, and visit ``http://localhost:8000`` to test the page.
6. You will probably need to update the HTML to match the columns in your spreadsheet. The photo caption template is located in ``src/_details.html``.
7. Once you're ready to publish, talk to one of the developers about prepping the slider for deployment to the projects domain.