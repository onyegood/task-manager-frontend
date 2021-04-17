import React, { useCallback } from 'react';
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { TaskValidation } from './validator';
import InputField from '../input';
import { createNewTaskRequest, updateTaskRequest } from '../../redux/actions';
import { Task } from '../../model/Task';
// import FormikSwitchComponent from '../switch/FormikSwitchComponent';

interface Props {
    task: Task;
    setFormMode: Function;
}

const TaskForm = ({ task, setFormMode }: Props) => {
    const dispatch = useDispatch();
    const handleClick = useCallback(
        async values => {
            if (task.id) {
                await dispatch(updateTaskRequest(task.id, values));
                setFormMode(false);
            } else {
                await dispatch(createNewTaskRequest(values));
                setFormMode(false);
            }
        },
        [dispatch, task, setFormMode]
    );

    const {
        handleChange,
        handleSubmit,
        handleBlur,
        // @ts-ignore
        values,
        errors,
        touched
    } = useFormik({
        enableReinitialize: true,
        validationSchema: TaskValidation,
        initialValues: {
            name: task.name,
            date: task.date
        },
        // @ts-ignore
        onSubmit: () => handleClick(values)
    });

    return (
        <>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 mt-3">
                            <InputField
                                id="name"
                                title="Name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter task name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.name}
                                error={errors.name}
                                touched={touched.name || false}
                            />
                        </div>
                        <div className="col-sm-12 mt-3">
                            <InputField
                                id="date"
                                title="Doe Date"
                                name="date"
                                type="date"
                                className="form-control"
                                placeholder=""
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.date}
                                error={errors.date}
                                touched={touched.date || false}
                            />
                        </div>
                        <div className="col-sm-12 mt-4 mb-2">
                            <button className="btn btn-success" onClick={() => handleSubmit()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskForm;