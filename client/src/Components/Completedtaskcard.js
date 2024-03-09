import React from 'react';
import { Card } from 'flowbite-react';
import { HiCheckCircle } from 'react-icons/hi';

const Completedtaskcard = ({ tasks }) => {
    return (
        <div className="mt-2 mb-2 ml-10 mr-10">
            <Card className={`relative flex h-full flex-row gap-4 p-6 bg-green-100`}>
                <div className="flex flex-row justify-center gap-4">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Name: {tasks.task_name}
                            </h5>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">
                                <span className="font-bold">Task Description:</span> {tasks.task_description}<br />
                                <span className="font-bold">Task Tools To Be Used:</span> {tasks.tools_used}<br />
                                <span className="font-bold">Deadline:</span> {tasks.deadline}<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute right-4 bottom-4 text-green-500">
                    <HiCheckCircle className="h-6 w-6" />
                </div>
            </Card>
        </div>
    );
}

export default Completedtaskcard;
