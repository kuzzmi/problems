function optimalSchedule(jobs) {
    
    var jobsToPick = [];
    var i = 0, l;

    while (jobs.length) {
        var curMin = -1;
        var min = 1000;
        var jobToPick;
        var job;
        // find the job that ends earlier than others
        for (i = 0, l = jobs.length; i < l; i++) {
            job = jobs[i];
            if (job.end < min) {
                min = job.end;
                curMin = i;
            }
        }

        jobToPick = jobs[curMin];

        // remove all jobs that are intersecting with selected
        for (i = 0, l = jobs.length; i < l; i++) {
            job = jobs[i];
            console.log(job);
            if (( job.start < jobToPick.start &&
                  job.end > jobToPick.end 
                ) || (
                  job.start > jobToPick.start &&
                  job.start < jobToPick.end 
                ) || (
                  job.end > jobToPick.start &&
                  job.end < jobToPick.end
                )) {
                console.log(jobs);
                jobs.splice(i, 1);
            }
        }
        jobsToPick.push(jobToPick);
    }
    
    return jobsToPick;

}


var arr = [{
    name: '1',
    start: 0,
    end: 5
}, {
    name: '2',
    start: 1,
    end: 3
}, {
    name: '3',
    start: 2,
    end: 6
}, {
    name: '4',
    start: 4,
    end: 8
}, {
    name: '5',
    start: 7,
    end: 10
}, {
    name: '6',
    start: 9,
    end: 14,
}, {
    name: '7',
    start: 10,
    end: 12
}, {
    name: '8',
    start: 11,
    end: 15
}, {
    name: '9',
    start: 14,
    end: 16
}];

console.log(optimalSchedule(arr));
