// A system that can run multiple concurrent jobs on a single CPU have a process of choosing which task hast to run when, and how to break them up, called “scheduling”. The Round-Robin policy for scheduling runs each job for a fixed amount of time before switching to the next job. The waiting time fora job is the total time that it spends waiting to be run. Each job arrives at particular time for scheduling and certain time to run, when a new job arrives, It is scheduled after existing jobs already waiting for CPU time.Given list of job submission, calculate the average waiting time for all jobs using Round-Robin policy.
// The input to the function waitingTime Robin consist of two integer arrays containing job arrival and run times, an integer n representing number of jobs and am integer q  representing the fixed amount of time used by Round-Robin policy. The list of job arrival time and run time sorted in ascending order by arrival time. For jobs arriving at same time, process them in the order they are found in the arrival array. You can assume that jobs arrive in such a way that CPU is never idle.
// The function should return floating point value for the average waiting time which is calculated using round robin policy.
// Assume 0<=jobs arrival time < 100 and 0<job run time <100.
// Solution:
#include<iostream> 
using namespace std; 
void findWaitingTime(int processes[], int n, int bt[], int wt[], int quantum) 
{ 
	int rem_bt[n]; 
	for (int i = 0 ; i < n ; i++) 
		rem_bt[i] = bt[i]; 

	int t = 0;

	while (1) 
	{ 
		bool done = true; 
		for (int i = 0 ; i < n; i++) 
		{ 
			if (rem_bt[i] > 0) 
			{ 
				done = false; 

				if (rem_bt[i] > quantum) 
				{ 
					t += quantum; 
					rem_bt[i] -= quantum; 
				} 
				else
				{ 
					t = t + rem_bt[i]; 
					wt[i] = t - bt[i]; 
					rem_bt[i] = 0; 
				} 
			} 
		} 
		if (done == true) 
		break; 
	} 
} 

void findTurnAroundTime(int processes[], int n, int bt[], int wt[], int tat[]) 
{ 
	for (int i = 0; i < n ; i++) 
		tat[i] = bt[i] + wt[i]; 
} 

void waitingTimeRobin(int processes[], int bt[], int quantum, int n) 
{ 
	int wt[n], tat[n], total_wt = 0, total_tat = 0; 

	findWaitingTime(processes, n, bt, wt, quantum); 

	findTurnAroundTime(processes, n, bt, wt, tat); 

	cout << "Processes "<< " Burst time "<< " Waiting time " << " Turn around time\n"; 

	for (int i=0; i<n; i++) 
	{ 
		total_wt = total_wt + wt[i]; 
		total_tat = total_tat + tat[i]; 
		cout << " " << i+1 << "\t\t" << bt[i] <<"\t "<< wt[i] <<"\t\t " << tat[i] <<endl; 
	} 
	cout << "Average waiting time = "<< (float)total_wt / (float)n;
}

int main() 
{ 
	int n, quantum, processes[100], burst_time[100];

	printf("Enter numbers of jobs: ");
	scanf("%d", &n);
	printf("Enter arrival time of %d jobs:\n",n);
	for(int i=0;i<n;i++)
	{
		scanf("%d", &processes[i]);
	}
	printf("Enter run time of %d jobs:\n",n);
	for(int i=0;i<n;i++)
	{
		scanf("%d", &burst_time[i]);
	}
	printf("Enter fixed amount of time used: ");
	scanf("%d", &quantum);
	waitingTimeRobin(processes, burst_time, quantum, n); 
	return 0; 
} 
