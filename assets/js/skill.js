const techSkillList = document.querySelector('#skill-list');
db.collection('TechSkills').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if(change.type == 'added'){
        init(change.doc);
    } else if (change.type == 'removed') {
        let techSkill_li = techSkillList.querySelector('[data-id=' + change.doc.id + ']');
        techSkillList.removeChild(techSkill_li);
    }
    })
})
let techSkill_li = document.createElement('li');
let techSkill_name = document.createElement('span');
techSkill_li.setAttribute('data-id',doc.id);
techSkill_name.textContent = doc.data().Name;
techSkill_li.appendChild(techSkill_name);
techSkillList.appendChild(techSkill_li);


