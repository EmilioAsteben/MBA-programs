import {subjectsList} from './subjectsList';

export async function getPrograms() {

    const numberOfPrograms = 5;


    
    let programs = document.getElementsByClassName('programs');

    let fetchedData;
    let response = await fetch('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses');
     fetchedData = await response.json();
     

   
    let moduleTitles = []   //  contains module titles to avoid duplicates


    //
     for(let i = 0; i < numberOfPrograms * 4; i++){


        if ( fetchedData.data[i].mbaTypeOfProgram === 'mini' || 
        moduleTitles.includes(fetchedData.data[i].title)) continue;

        let program = document.createElement('div');
        program.classList.add('program');
   

        
        let programTitle = document.createElement('h3');
        moduleTitles.push(programTitle.textContent = fetchedData.data[i].title);
        program.appendChild(programTitle);

        let modulesContainer = document.createElement('div');
        modulesContainer.classList.add('modules')
        

        

        let modules = []; // contains the modules itself as well as lists of subjects
        

        for(let k = 0; k <= 1 ; k++){
        let programModule = document.createElement('div');
        programModule.classList.add('program_module')
       
        let programModuleTitle = document.createElement('div');
        programModuleTitle.classList.add('program_module_title')
        
       
        programModuleTitle.innerHTML = `<h4>${k+1} модуль </h4>`
        programModule.appendChild(programModuleTitle);
       modules.push({module : modulesContainer.appendChild(programModule)});

       let moduleSubjectsList = document.createElement('ul');
       moduleSubjectsList.classList.add('subjects_list');
       modules[k]['subjects_list'] = programModule.appendChild(moduleSubjectsList);

        }

        program.appendChild(modulesContainer);
       

        
        let listItems = document.createDocumentFragment();
        
        //repeated code avoids complex logic and improves the readability
        for (let j = 0; j < 5; j++){
            
            let listItem = document.createElement('li');
            listItem.textContent = fetchedData.data[i].specializedSubjects[j];
            listItems.appendChild(listItem);

        }

       modules[0]['subjects_list'].appendChild(listItems);
       listItems = document.createDocumentFragment();

             for (let j = 5; j < 10; j++){
            
            let listItem = document.createElement('li');
            listItem.textContent = fetchedData.data[i].specializedSubjects[j];
            listItems.appendChild(listItem);

        }

        modules[1]['subjects_list'].appendChild(listItems);

        


       programs[0].appendChild(program);

       

        
     }

     
     subjectsList();
    
  }