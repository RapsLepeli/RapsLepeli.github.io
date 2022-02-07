const url = "https://api.github.com/users/RapelangLepeli/repos";

const btnRepos = document.getElementById("btnRepos");

const divResult = document.getElementById("btnRepos");
btnRepos.addEventListener("click",getRepos)

//
async function getRepos(){
    
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    
    for (let index = 0; index < 1; index++) {

        const element = result[index];

        const nameHeader = document.getElementById("pname")
        nameHeader.textContent = element.name;

        const langparagraph = document.getElementById("planguage");
        langparagraph.textContent = element.language;

        const dateparagraph = document.getElementById("pdate");
        const date = (element.created_at).split("T")[0];
        dateparagraph.textContent = date;

        const desparagraph = document.getElementById("pdescription");
        const shortDesc = (element.description).substring(0,120) + "...";
        desparagraph.textContent = shortDesc;

        const linkparagraph = document.getElementById("pdescription");
        linkparagraph.href = element.html_url;






        //console.log(element);

        const breakline = document.createElement("br");

        const name = document.createElement("h3");
        name.textContent = element.name;
        divResult.appendChild(name);
        divResult.appendChild(breakline);

        console.log(element.name);

        const id = document.createElement("h3");
        id.textContent = element.id;
        divResult.appendChild(breakline);

        console.log(element.id);
        console.log(element.language);
        console.log(element.description);     
        console.log(element.created_at);
        console.log(element.html_url);
        


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
