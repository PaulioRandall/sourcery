// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import { database } from '../models'
import { os } from '../models'

export function AddTask(arg1: database.Task): Promise<void>

export function CloseDatabase(): Promise<void>

export function GetFilesInDir(arg1: string): Promise<Array<os.File>>

export function OpenDatabase(arg1: string): Promise<void>
