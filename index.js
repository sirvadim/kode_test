const input = {
    p1: {
      s1: {
        title: 'scene 1',
        description: 'description 1',
        value: 1,
      },
      s2: {
        title: 'scene 2',
        description: 'description 2',
        value: 32,
      },
      s3: {
        title: 'scene 3',
        description: 'description 3',
        value: 89,
      },
      s4: {
        title: 'scene 3',
        description: 'description 3',
        value: 0,
      },
    },
    p2: {
      s5: {
        title: 'scene 5',
        description: 'description 5',
        value: 0,
      },
      s6: {
        title: 'scene 6',
        description: 'description 6',
        value: 42,
      },
      s7: {
        title: 'scene 7',
        description: 'description 7',
        value: -9,
      },
    },
}

function solve(input) {
    let output = []

    for(let key in input){
        for(let key2 in input[key]){
            if(input[key][key2].value > 0){
                output.push({
                    projectId: key,
                    sceneId: key2,
                    value: input[key][key2].value,
                    title: input[key][key2].title,
                })
            }
        }

    }
    return output
}

const result = solve(input)

function compareObj(item1, item2) {
    if      (item1.value < item2.value) return 1
    else if (item1.value > item2.value) return -1
}

result.sort(compareObj)
console.log(result)
