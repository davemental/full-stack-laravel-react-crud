<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;

class NoteController extends Controller
{
    public function index() {
        if (auth()->check()) {
            $notes = auth()->user()->notes;
            return Inertia::render('Dashboard', ['noteData'=> $notes]);
        }

        return to_route('dashboard')->with('error', 'Not authenticated');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => ['required', 'max:255', 'min:3'],
            'description' => ['required', 'max:255', 'min:3']
        ]);

        Note::create([
            'user_id'=> auth()->id(),
            'title' => $request->title,
            'description' => $request->description
        ]);

        return to_route('dashboard')->with('message', 'Note created successfully');
    }

    // remove the specified note
    public function destroy(Note $note) {
        $note->delete();
        return to_route('dashboard')->with('message', 'Note deleted successfully');
    }

    public function update( Request $request, Note $note) {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'max:255', 'min:3'],
            'description' => ['required', 'max:255', 'min:3']
        ]);

        if ($validator->fails()) {
            return to_route('dashboard', [
                'error' => $validator->errors()->all(),
            ]);
        }

        $note->update([
            'id'=> $request->id,
            'title' => $request->title,
            'description' => $request->description
        ]);

        return to_route('dashboard')->with('message', 'Note save successfully');
    }
}
