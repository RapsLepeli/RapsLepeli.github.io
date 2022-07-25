const url = "https://api.github.com/users/RapelangLepeli/repos";


window.onload = getRepos();

// getRepos
async function getRepos(){
    
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    
    for (let index = 0; index < 9; index++) {

        const element = result[index];
        let counter = index + 1;
        const nameHeader = document.getElementById("pname" + counter)
        nameHeader.textContent = element.name;

        const langparagraph = document.getElementById("planguage" + counter);
        langparagraph.textContent = element.language;

        const dateparagraph = document.getElementById("pdate" + counter);
        const date = (element.created_at).split("T")[0];
        dateparagraph.textContent = date;

        const desparagraph = document.getElementById("pdescription" + counter);
        desparagraph.textContent = element.description;
        
        /*if(element.description == "" || element == null){
            desparagraph.textContent = element.description;
        }else{
            const shortDesc = (element.description).substring(0,120) + "...";
            desparagraph.textContent = shortDesc;
        }*/

        const linkparagraph = document.getElementById("plink" + counter);
        linkparagraph.href = element.html_url;



    }
}

/*user = 'RapelangLepeli'
        apirepo = `https://api.github.com/users/${user}`
        
   listrepos = document.createElement('ul')
        document.getElementById('github').appendChild(listrepos)
        $.getJSON(apirepo + '/repos', function (data) {
            console.log('data now', data)

            function compare(a, b) {
                if (a.watchers > b.watchers) {
                    return -1
                }
                if (a.watchers < b.watchers) {
                    return 1
                }
                return 0
            }

            data.sort(compare)
            data.forEach(v => {

                listItemRepo = document.createElement('li')
                listrepos.appendChild(listItemRepo)
                hlink = document.createElement('a')
                listItemRepo.appendChild(hlink)
                hlink.textContent = `|Name: ${v.name}           | Description: ${v.description}          | Stars: ${v.watchers}`
                hlink.href = v.html_url
            })
        })
*/


