// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import { database } from '../models'
import { files } from '../models'

export function AddTask(arg1: database.Task): Promise<any>

export function CloseDatabase(): Promise<any>

export function ListFilesInDir(arg1: string): Promise<Array<files.ReadOnlyFile>>

export function OpenDatabase(arg1: string): Promise<any>

export function ToAbsPath(arg1: string): Promise<string>
